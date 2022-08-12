import React, { useEffect } from "react"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
import db from "./data"

const Index = () => {
  const defaultColor = "#DB4545"
  const defaultSlide = {
    display: "none",
  }
  const activeSlide = {
    width: "880px",
    height: "520px",
    objectFit: "cover",
    zIndex: "999",
    transition: "0.5s",
  }

  const nextSlide = {
    width: "900px",
    objectFit: "cover",
    position: "absolute",
    marginRight: "-100px",
    height: "500px",
    opacity: "70%",
    transition: "0.5s",
  }
  const prevSlide = {
    width: "900px",
    objectFit: "cover",
    position: "absolute",
    marginLeft: "-100px",
    height: "500px",
    opacity: "70%",
    transition: "0.5s",
  }
  const [data, setData] = React.useState(db)
  const [pos, setPos] = React.useState(0)

  const nxtSlide = () => {
    const lastPos = data.length - 2
    setPos(pos + 1)
    if (pos > lastPos) {
      setPos(0)
    }
  }

  const prvSlide = () => {
    const lastPos = data.length - 1
    setPos(pos - 1)
    if (pos < 1) {
      setPos(lastPos)
    }
  }

  return (
    <>
      <section className="base" style={{ justifyContent: "center" }}>
        <MdArrowBackIos
          style={{
            fill: `${defaultColor}`,
            fontSize: "46px",
            width: "auto",
            cursor: "pointer",
          }}
          onClick={() => prvSlide()}
        />
        <article
          className="center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            minHeight: "624px",
          }}
        >
          <h1 style={{ color: `${defaultColor}`, fontSize: "46px" }}>
            Akatsuki
          </h1>
          <div
            className="center-image"
            style={{
              width: "1000px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {data.map((item, index) => {
              const { url, title } = item
              let position = defaultSlide

              if (pos === index) {
                position = activeSlide
              }
              if (
                index === pos - 1 ||
                (pos === 0 && index === data.length - 1)
              ) {
                position = prevSlide
              }
              if (
                index === pos + 1 ||
                (pos === data.length - 1 && index === 0)
              ) {
                position = nextSlide
              }
              return <img src={url} alt={title} style={position} key={index} />
            })}
          </div>
          <h1 style={{ color: "#000", fontSize: "46px" }}>
            {data[pos]?.title}
          </h1>
        </article>
        <MdArrowForwardIos
          style={{
            color: `${defaultColor}`,
            fontSize: "46px",
            width: "auto",
            cursor: "pointer",
          }}
          onClick={() => nxtSlide()}
        />
      </section>
    </>
  )
}

export default Index
