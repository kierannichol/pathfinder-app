import Section from "@/view/components/character/edit/common/Section.tsx";
import FlowLayout from "@/view/components/character/edit/common/FlowLayout.tsx";
import UnderlinedTextInput from "@/view/components/character/edit/fields/UnderlinedTextInput.tsx";
import AlignmentSelect from "@/view/components/character/edit/fields/AlignmentSelect.tsx";
import VerticalLayout from "@/view/components/character/edit/common/VerticalLayout.tsx";
import {UnderlinedSelectChoiceInput} from "@/view/components/character/edit/fields/UnderlinedSelectChoiceInput.tsx";
import styles from "./CharacterInfoSection.module.css";
import ClassSelect from "@/view/components/character/edit/fields/ClassSelect.tsx";

interface CharacterInformationSectionProps {

}

export default function CharacterInfoSection({}: CharacterInformationSectionProps) {
  return <Section header='Character Information'>
    <VerticalLayout>
      <FlowLayout>
        <UnderlinedTextInput className={styles['choice-character_name']} choice='character_name' />
        <UnderlinedTextInput className={styles['choice-current_level']} choice='current_level' />
        <AlignmentSelect className={styles['choice-alignment']} />
        <UnderlinedSelectChoiceInput className={styles['choice-race']} choice='race' />
        <ClassSelect className={styles['choice-class']} />
        <UnderlinedTextInput className={styles['choice-deity']} choice='deity' />
        <UnderlinedTextInput className={styles['choice-homeland']} choice='homeland' />
        <UnderlinedTextInput className={styles['choice-gender']} choice='gender' />
        <UnderlinedTextInput className={styles['choice-age']} choice='age' />
        <UnderlinedTextInput className={styles['choice-height']} choice='height' />
        <UnderlinedTextInput className={styles['choice-weight']} choice='weight' />
        <UnderlinedTextInput className={styles['choice-hair']} choice='hair' />
        <UnderlinedTextInput className={styles['choice-eyes']} choice='eyes' />
      </FlowLayout>
    </VerticalLayout>
  </Section>
}