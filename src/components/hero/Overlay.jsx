import React, { forwardRef } from "react"

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = scroll.current.toFixed(2)
    }}
    class="scroll">
    <div style={{ height: "200vh", textAlign: "right" }}>
      <div class="dot">
        <h1>STREET FASHION <br></br> YOUR STYLE</h1>
        Switch up your HAPE's Clothing with digital drops, ranks up on the Fashion Index and build your look for the metaverse.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>RUN THE <br />HAPEWALK</h1>
        Take to the runaway and show off Your collection. Become a HAPEFLUENCER and read the real-world reward.
      </div>
    </div>
  </div>
))

export default Overlay
