import Link from "next/link";

interface Props {
  className?: string;
  title: string;
  subtitle: string;
}
const Logo = ({ title, subtitle }: Props) => {
  return (
    <div className="text-2xl group">
      <Link href="/">
        <h2 className="text-2xl font-semibold hover:text-hoverColor hoverEffect">
          {title}{" "}
          <span className="text-lightSky group-hover:text-white hoverEffect">
            {" "}
            {subtitle}{" "}
          </span>
        </h2>
      </Link>
    </div>
  );
};
//fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCkIT5lu.woff2
export default Logo;
