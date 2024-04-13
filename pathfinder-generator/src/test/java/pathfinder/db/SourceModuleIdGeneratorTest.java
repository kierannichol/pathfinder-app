package pathfinder.db;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

class SourceModuleIdGeneratorTest {

    @Test
    void multipleEntityNoConflict() {
        SourceModuleIdGenerator generatorA = new SourceModuleIdGenerator(1);
        SourceModuleIdGenerator generatorB = new SourceModuleIdGenerator(2);

        int idA = generatorA.generate("A").number();
        int idB = generatorB.generate("A").number();

        System.out.println(Integer.toBinaryString(idA) + " = " + idA);
        System.out.println(Integer.toBinaryString(idB) + " = " + idB);

        assertThat(idA).isNotEqualTo(idB);
    }

    @Test
    void multipleComponentsNoConflict() {
        SourceModuleIdGenerator generatorA = new SourceModuleIdGenerator(1);

        int idA = generatorA.generate("A").number();
        int idB = generatorA.generate("B").number();

        System.out.println(Integer.toBinaryString(idA) + " = " + idA);
        System.out.println(Integer.toBinaryString(idB) + " = " + idB);

        assertThat(idA).isNotEqualTo(idB);
    }
}