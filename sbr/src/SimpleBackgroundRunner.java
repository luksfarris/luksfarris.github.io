import java.util.concurrent.ConcurrentLinkedQueue;

/**
 * @author Lucas
 * Simple thread to enqueue and run tasks in background. The running cycle is to wait
 * 2 seconds, then do all the possible work.
 */
public class SimpleBackgroundRunner extends Thread {
	
	/** Pool of jobs to be done. */
	private ConcurrentLinkedQueue<Runner> pool = new ConcurrentLinkedQueue<>();
	
	@Override
	public void run() {
		while (true) {
			Runner runner = pool.poll();
			while (runner != null) {
				boolean success = false;
				if (runner.getRunnable() != null) {
					runner.getRunnable().run(); // runs if possible
					success = true;
				}
				if (runner.getCallback() != null) {
					runner.getCallback().onRunnerFinished(success); // sends callback if possible
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
	
	/**
	 * Adds a runnable to the event pool.
	 * @param runnable runnable to be ran in background.
	 * @param callback callback to be called in bg thread!
	 */
	public void postEvent (Runnable runnable, RunnerCallback callback) {
		pool.offer(new Runner(runnable, callback));
	}
}
