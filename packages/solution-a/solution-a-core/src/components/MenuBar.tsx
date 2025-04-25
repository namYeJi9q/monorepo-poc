interface MenuBarProps {
  title?: string;
  hideTestButton?: boolean;
}

export const MenuBar: React.FC<MenuBarProps> = ({
  title,
  hideTestButton = false,
}) => <h1>{title}</h1>;
