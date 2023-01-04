import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/publication.module.css"
import { Chip } from "@material-ui/core"

const PublicatioinPage = () => {
  const handleOnclick = () => {
    // bg_audio_instance.play()
  }
  return (
    <Layout>
      <Seo title="Publications" />

      <h1 onLoad={handleOnclick()}>Publications</h1>
      <div>
        <div>
          <papertitle>
            M-SpeechCLIP: Leveraging Large-Scale, Pre-Trained Models for
            Multilingual Speech to Image Retrieval
          </papertitle>
          <br />
          Layne Berry, <strong>Yi-Jen Shih</strong>, Hsuan-Fu Wang, Heng-Jui
          Chang, Hung-yi Lee, David Harwath
          <br />
          <em>Under Review ICASSP</em>
          <br />
          <div className={styles.pub_links}>
            <Chip
              size="small"
              label="arXiv"
              component="a"
              href="https://arxiv.org/abs/2211.01180"
              variant="outlined"
              color="primary"
              clickable
            />
          </div>
          <p></p>
        </div>
        <div>
          <papertitle>
            SpeechCLIP: Integrating Speech with Pre-Trained Vision and Language
            Model
          </papertitle>
          <br />
          <strong>Yi-Jen Shih</strong>, Hsuan-Fu Wang, Heng-Jui Chang, Layne
          Berry, Hung-yi Lee, David Harwath
          <br />
          <em>IEEE Spoken Language Technology Workshop (SLT) 2022</em>
          <br />
          <div className={styles.pub_links}>
            <Chip
              size="small"
              label="arXiv"
              component="a"
              href="https://arxiv.org/abs/2210.00705"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="code"
              component="a"
              href="https://github.com/atosystem/SpeechCLIP"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="blog"
              component="a"
              href="/blogs/speechclip"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="poster"
              component="a"
              href="/publications_files/speechclip/SpeechCLIP_slt_poster_v2.pdf"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="present@JSALT'22"
              component="a"
              href="https://www.youtube.com/watch?v=_GbZRM18NxQ&t=2118s"
              variant="outlined"
              color="primary"
              clickable
            />
          </div>
          <p></p>
        </div>
        <div>
          <papertitle>
            Theme Transformer: Symbolic Music Generation with Theme-Conditioned
            Transformer
          </papertitle>
          <br />
          <strong>Yi-Jen Shih</strong>, Shih-Lun Wu, Frank Zalkow, Meinard
          Müller, Yi-Hsuan Yang
          <br />
          <em>IEEE Transactions on Multimedia (TMM) 2022</em>
          <br />
          <div className={styles.pub_links}>
            <Chip
              size="small"
              label="arXiv"
              component="a"
              href="https://arxiv.org/abs/2111.04093"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="code"
              component="a"
              href="https://github.com/atosystem/ThemeTransformer"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="demo"
              component="a"
              href="https://atosystem.github.io/ThemeTransformer/#demo"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="blog"
              component="a"
              href="/blogs/theme-transformer"
              variant="outlined"
              color="primary"
              clickable
            />
            <Chip
              size="small"
              label="talk@MILA"
              component="a"
              href="https://www.youtube.com/watch?v=U2T_1HH0yH0"
              variant="outlined"
              color="primary"
              clickable
            />
          </div>
          <p></p>
        </div>
      </div>
    </Layout>
  )
}

export default PublicatioinPage
