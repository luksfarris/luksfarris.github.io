document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('iron-wolf-widget');
    if (!container) return;

    const button = document.getElementById('iron-wolf-pick');
    const output = document.getElementById('iron-wolf-output');

    function showError(msg) {
        if (output) output.textContent = msg;
    }

    function pickRandom(arr) {
        const rand = Math.floor(Math.random() * arr.length)
        console.log('Picked random index:', rand);
        return arr[rand];
    }

    function renderWorkout(item) {
        if (!output) return;
        if (item) {
            const title = Object.keys(item)[0] || 'Workout';
            const el = document.createElement('div');
            const h = document.createElement('h2');
            h.textContent = title;
            el.appendChild(h);


            const pre = document.createElement('pre');
            pre.textContent = Object.values(item)[0];
            el.appendChild(pre);

            output.innerHTML = '';
            output.appendChild(el);
        } else {
            output.textContent = JSON.stringify(item, null, 2);
        }
    }

    let workouts = [];

    function pickAndShow() {
        if (!workouts || workouts.length === 0) {
            showError('No workouts available');
            return;
        }
        const item = pickRandom(workouts);
        renderWorkout(item);
    }

    fetch('/assets/data/workouts.yaml', { cache: 'no-store' })
        .then(r => {
            if (!r.ok) throw new Error('Failed to fetch workouts.yaml');
            return r.text();
        })
        .then(txt => {
            let parsed;
            try {
                if (window.jsyaml && typeof window.jsyaml.load === 'function') {
                    parsed = window.jsyaml.load(txt);
                } else if (window.jsyaml && typeof window.jsyaml.safeLoad === 'function') {
                    parsed = window.jsyaml.safeLoad(txt);
                } else if (window.YAML && typeof window.YAML.parse === 'function') {
                    parsed = window.YAML.parse(txt);
                } else if (window.jsyaml) {
                    parsed = window.jsyaml(txt);
                } else {
                    throw new Error('YAML parser not found (include js-yaml)');
                }
            } catch (err) {
                showError('Failed to parse YAML: ' + err.message);
                return;
            }

            if (Array.isArray(parsed)) {
                workouts = parsed;
            } else if (parsed && Array.isArray(parsed.workouts)) {
                workouts = parsed.workouts;
            } else if (parsed && typeof parsed === 'object') {
                workouts = Object.values(parsed);
            } else {
                workouts = [parsed];
            }

            pickAndShow();
        })
        .catch(err => showError(err.message));

    if (button) button.addEventListener('click', pickAndShow);
});
