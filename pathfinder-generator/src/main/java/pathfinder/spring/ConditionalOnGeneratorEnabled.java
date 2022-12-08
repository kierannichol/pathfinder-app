package pathfinder.spring;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.core.annotation.AliasFor;

@Retention(RetentionPolicy.RUNTIME)
@Target({ ElementType.TYPE, ElementType.METHOD })
@Documented
@ConditionalOnProperty(prefix = "generator.allow", havingValue = "true")
public @interface ConditionalOnGeneratorEnabled {

    @AliasFor(value = "value", annotation = ConditionalOnProperty.class)
    String[] value() default {};
}
