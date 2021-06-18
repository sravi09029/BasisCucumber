package runner;

import java.io.File;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/Features"},
							glue= {"Steps"},monochrome=true, 
							tags = {"@sanity, @Functional"},
							plugin = {"pretty","html:target/cucumber"})
public class Runner {
	
	
}
