##What is the piece of code, you've written in Java, of which you are most proud? Please post a link (or attach the code).



##What is your favorite language feature of Java? Please explain.

I really, really like generics in Java. It is not exclusive of the Java language, but it is a very good feature to have. I find it very useful when writing parser libraries, because generics allow for the engineer using the library to provide his own classes, and using a little injection (if necessary) does the trick wonderfully. I have to mention that I also enjoy the assertions.

##What annoys you the most about Java? Please explain.

I am not very fond of the checked/unchecked exception dilema, or some exception handling strategies. I have seen too many times unchecked exceptions go by untreated, and last weeks or months, and `catch (Exception e) {e.printStackTrace()} ` blocks. I believe that if there is a reason to throw an unchecked exception, then there is a reason for it to be checked. Also exceptions make it too easy for lazy programmers to handle errors. It is not rare to see that consoles of enterprise systems are a huge mess.


##What was the toughest bug you encountered while developing for the Android platform, and how did you track it down?

What instantly came to my mind is a bug I had on the IBA reader app (May 2014). The core of the reader was built in C++, using a paid license of Adobe's RMSDK. The Android app would make native JNI calls to our wrappers. I had implemented the text selection on the Android side, getting XY coordinates and sending to the wrappers (implemented by another engineer), to receive the selection's rectangles. For some reason, when selecting some images the rectangles would be messy. By cropping the pages with the wrong behaviour, and building a simple test case of the expected rectangles and the returned ones, I proved there was a problem in the wrapper. Further investigation proved the wrapper was correct, hence the problem was in RMSDK. We contacted Adobe, and they advised us to upgrade the library, which eventually corrected the problem. The whole thing took at least a week.    

##For which task(s) would you rather use a different programming language on Android? Please explain.

I would use a different language if writing complex software that would run on different platforms. More specifically, if I would write software that relies heavily on networking, i/o, or data processing, and that software would have to run on other OS' like iOS or Windows: I would not use Java. I would use C++ instead. 