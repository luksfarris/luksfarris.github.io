
public class Runner {

	private Runnable runnable;
	private RunnerCallback callback;
	
	public Runner(Runnable runnable, RunnerCallback callback) {
		this.runnable = runnable;
		this.callback = callback;
	}

	public Runnable getRunnable() {
		return runnable;
	}

	public RunnerCallback getCallback() {
		return callback;
	}
}
