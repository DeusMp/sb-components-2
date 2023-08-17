import './MyLabel.css';



interface Props {
  /** 
   * Texto que se mostrará en la etiqueta
   */
  label: string;

  /**
   * LABEL tamaño
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Maneja mayusculas o minusculas
   */
  allCaps?: boolean;

  /**
  * Label Color
  */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

  /**
  * Font Color
  */
  fontColor?: string;

  /**
  * background Color
  */
  backgroundColor?: string;
}


export const MyLabel = ({
  label,
  size = 'normal',
  allCaps = false,
  color,
  fontColor,
  backgroundColor = 'transparent'
}: Props) => {
  return (
    <span style={{ color: fontColor, backgroundColor }} className={`label ${size} ${color}`}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
