import Link from "next/link";

const SiteLink = ({ linkTo, value, className, externalLink, ...props }) =>
  externalLink ? (
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

export default SiteLink;
