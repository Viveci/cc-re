import Link from "next/link";
import { useRouter } from 'next/router';

const SiteLink = ({ linkTo, value, className, externalLink, ...props }) => {
  const router = useRouter();
  return externalLink ? (
    <a href={externalLink} className={className} {...props}>
      {value}
    </a>
  ) : (
    <Link href={linkTo}>
      <a className={className} {...props}>
        {value}
      </a>
    </Link>
  );
}



export default SiteLink;
