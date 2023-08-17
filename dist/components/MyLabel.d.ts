import './MyLabel.css';
export interface Props {
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: Props) => import("react/jsx-runtime").JSX.Element;
