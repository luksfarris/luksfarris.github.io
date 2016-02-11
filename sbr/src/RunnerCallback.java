/**
 * @author Lucas
 * Callback interface for the thread.
 */
public interface RunnerCallback {
	/**
	 * Callback method called when the runnable finishes.
	 * @param success if the job was successful.
	 */
	void onRunnerFinished(boolean success);
}
