import './myLabel.css'

export interface MyLabelProps {
  /**
   *  This is the message of the label
   */
  label: string
  /**
   * This corresponds to the font size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3'
  /**
   * Changes the color of the label text
   */
  color?: 'primary' | 'secondary' | 'tertiary'
  /**
   * Set uppercase
   */
  allCaps?: boolean
  /**
   * Set custom font color
   */
  fontColor?: string
}

/**
 * Default label for forms
 */
export function MyLabel({
  label = 'No label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor = '',
}: MyLabelProps) {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}

export default MyLabel
