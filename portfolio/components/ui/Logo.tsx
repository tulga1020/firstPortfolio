import { Link } from "lucide-react";

interface Props {
  className?: string;
  title: string;
  subtitle: string;
}
const Logo = ({ className, title, subtitle }: Props) => {
  return (
    <div>
      <Link href="/">
        <h2 className="text-2xl font-semibold hover:text-hoverColor hoverEffect">
          {title} {subtitle}
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
