


/**
 * @author Lucas
 * @Challenge: Write a simple asynchronous event handling mechanism
 *  with callback functionality to report success and failure. 
 *  You will need an event dispatcher/handler thread, 
 *  an interface for the success/failure callback and some 
 *  type of event/job (which could be a `Runnable` of course). 
 *  There must be some kind of method that allows event posting, 
 *  possible signatures could be: `postEvent(event, callback)` 
 *  or `postEvent(event)` (if your event contains the callback mechanism in itself). 
 *  The `postEvent` method should of course exit directly without waiting for the 
 *  task to finish (as it is asynchronous). Please refrain from using standard
 *  API task schedulers and such. Your basic building blocks should be `Thread` 
 *  and `Runnable`. You're also free to use the synchronization mechanisms 
 *  and synchronized containers from `java.util.concurrent`.
 */
public class App {

	public static void main(String[] args) {
		
		
		SimpleBackgroundRunner sbr = new SimpleBackgroundRunner();
		App app = new App();
		sbr.start();
		sbr.postEvent(app.new RunnableTest(), app.new Callback());
		sbr.postEvent(null, app.new Callback());
		sbr.postEvent(app.new RunnableTest(), null);
		sbr.postEvent(null, null);
		try {
			Thread.sleep(5000);//waits for everything to run
		} catch (InterruptedException e) {
			System.out.println("Program was interrupted");
		}
		sbr.interrupt();
	}
	
	class RunnableTest implements Runnable {
		@Override
		public void run() {
			System.out.println("Hello World");
		}
	}
	
	class Callback implements RunnerCallback {
		@Override
		public void onRunnerFinished(boolean success) {
			System.out.println("Success = " + success);
		}
	}
}