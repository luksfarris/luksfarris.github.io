import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class SimpleTest {

	private final ByteArrayOutputStream outContent = new ByteArrayOutputStream();
	private final ByteArrayOutputStream errContent = new ByteArrayOutputStream();
	private final SimpleBackgroundRunner sbr = new SimpleBackgroundRunner();
	private final App app = new App();

	@Before
	public void setUp() throws Exception {
		System.setOut(new PrintStream(outContent));
		System.setErr(new PrintStream(errContent));
		sbr.start();
	}

	@After
	public void tearDown() throws Exception {
		System.setOut(null);
		System.setErr(null);
		sbr.interrupt();
	}

	@Test
	public void testSuccessfullJob() {
		sbr.postEvent(app.new DemoRunnable(), app.new DemoCallback());
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			fail("test interrupted");
		}
		assertTrue(outContent.toString().contains("Hello World"));
		assertTrue(outContent.toString().contains("Success = true"));
	}

	@Test
	public void testInvalidRunnable() {
		sbr.postEvent(null, app.new DemoCallback());
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			fail("test interrupted");
		}
		assertFalse(outContent.toString().contains("Success = false"));
	}

	@Test
	public void testInvalidCallback() {
		sbr.postEvent(app.new DemoRunnable(), app.new DemoCallback());
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			fail("test interrupted");
		}
		assertTrue(outContent.toString().contains("Hello World"));
		assertFalse(outContent.toString().contains("Success ="));
	}

}
