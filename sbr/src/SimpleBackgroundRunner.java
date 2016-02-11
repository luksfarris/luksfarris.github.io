import java.util.concurrent.ConcurrentLinkedQueue;

public class SimpleBackgroundRunner extends Thread {
	
	private ConcurrentLinkedQueue<Runner> pool;
	
	public SimpleBackgroundRunner() {
		pool = new ConcurrentLinkedQueue<>();
	}
	
	@Override
	public void run() {
		while (true) {
			Runner runner = pool.poll();
			while (runner != null) {
				boolean success = false;
				if (runner.getRunnable() != null) {
					runner.getRunnable().run();
					success = true;
				}
				if (runner.getCallback() != null) {
					runner.getCallback().onRunnerFinished(success);
				}
				runner = pool.poll();
			}
			try {
				sleep(2000); // sleeps for 2 seconds
			} catch (InterruptedException e) {
				System.out.println("Runner Thread was interrupted");
				break;
			}
		}
	}
	
	public void postEvent (Runnable runnable, RunnerCallback callback) {
		pool.offer(new Runner(runnable, callback));
		System.out.println("Added an event. Event count = " + pool.size());
	}
}
