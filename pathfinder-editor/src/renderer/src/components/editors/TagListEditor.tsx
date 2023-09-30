import TagEditor from "./TagEditor";
import styles from "./TagListEditor.module.css";

interface TagListEditorProps {
  tags: string[];
  onChange?: (updated: string[]) => void;
}

export default function TagListEditor({ tags, onChange }: TagListEditorProps) {
  function handleChange(index: number, value: string) {
    onChange?.(tags.with(index, value));
  }

  function handleRemoved(index: number) {
    onChange?.(tags.splice(index, 1));
  }

  return <div className={styles.list}>
    {tags.map((tag, index) => <TagEditor key={index}
                                         value={tag}
                                         onChange={value => handleChange(index, value)}
                                         onDelete={() => handleRemoved(index)} />)}
  </div>
}