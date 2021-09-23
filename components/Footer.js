import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" /> */}
          {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" /> */}
          {/* <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" /> */}
          {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" /> */}
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© 2017 - ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://beian.miit.gov.cn/#/Integrated/index">赣ICP备16002719号-3</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011802001277">
            <Image
              src="https://cdn.hansuku.com/beian.png"
              alt="police-ico"
              className="inline-block"
            ></Image>
            浙公网安备 33011802001277号
          </Link>
        </div>
      </div>
    </footer>
  )
}
