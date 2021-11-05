import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/index.module.css"
import Img from "gatsby-image"

import TwitterIcon from "@material-ui/icons/Twitter"
import { Email, Facebook, GitHub, Instagram } from "@material-ui/icons"

import { FaMedium } from "@react-icons/all-files/fa/FaMedium"
import { useEffect } from "react"
import { Button } from "@material-ui/core"

const SurveyPage = () => {
  const data = useStaticQuery(graphql`
    {
      bg_music: file(
        sourceInstanceName: { eq: "music" }
        name: { eq: "intro_bgm" }
      ) {
        publicURL
      }
    }
  `)
  // console.log(data)
  // const bg_music_url = data.bg_music.publicURL
  // const bg_audio_instance = new Audio(bg_music_url)
  // bg_audio_instance.volume = 1

  // useEffect(()=>{
  //   bg_audio_instance.play()
  // },[])

  // bg_audio_instance.addEventListener('ended', function () {
  //   bg_audio_instance.play()
  // }, false);

  // componentDidMount() {
  //   bg_audio_instance.play()
  // }
  const handleOnclick = () => {
    const websites = [
      "https://docs.google.com/forms/d/e/1FAIpQLScEUIfBkuG715xY1diEvQCi9_9pyrAkeSVWAn-JbzbqInrvSw/viewform",
      "https://docs.google.com/forms/d/e/1FAIpQLSde0suyNzvJlugulLbOXLm-HRp9ZmMsHAybbqq-6D-VuXBG6w/viewform",
      "https://docs.google.com/forms/d/e/1FAIpQLSfp9_9kynOFiaDoDYNIWhQIzYAsBDar7X2JGk8BsLTiT27lLQ/viewform",
      "https://docs.google.com/forms/d/e/1FAIpQLSdRwd3hxp8dN_WqiReSsUCchVeZgEs2f-YAcjtuMKu-vagZrw/viewform"]
    const randomUrl = websites[Math.floor(Math.random() * websites.length)];
    // bg_audio_instance.play()
    // alert("asd")
    window.location.href = randomUrl;
  }
  return (
    <Layout>
      <Seo title="主題式音樂AI作曲問卷" />

      <h1 >主題式音樂AI作曲問卷</h1>
      您好，我們是中研院 音樂與人工智慧實驗室。<br/>
      首先感謝您願意抽空幫忙填寫問卷！<br/>
      <br/>
      我們目前在研究能夠根據給定的音樂主題來創作曲子的 AI 模型。<br/>
      <br/>
      這份問卷預計需要 15~20 分鐘，您將會需要幫忙聽一些音樂，並根據指示給予評分。<br/>
      <br/>
      準備好後，請點選下方按鈕來填寫 google 表單，網站將會幫你隨機分配到一個表單<br/>
      若有任何疑問，歡迎透過 e-mail 與我聯繫 (<a href={"mailto:yjshih23@gmail.com"}>yjshih23@gmail.com</a>，施貽仁)。<br/>
      祝聆聽愉快！
      <br/>問卷以結束！
      {/* <div style={{margin:"10px",textAlign:"center"}}>
      <Button onClick={handleOnclick} variant="outlined" color="primary">
      Click Me
    </Button>
    
    </div> */}
    </Layout>
  )
}

export default SurveyPage
