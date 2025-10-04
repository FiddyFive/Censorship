import { Link } from "react-router"
import Review from "../review/review"

function Browsers() {
  return (
    <>
      <h1>Recommended</h1>
      <p>None. Every browser is snooping on you and selling your info to any bidder.</p>
      <p>Get off the internet, go live in a cabin in the woods.</p>
      <p>That being said...</p>

      <Review title="TOR" links={
        [
          {
            name: "Homepage", 
            addr: "https://www.torproject.org"
          },
          {
            name: "Download",
            addr: "https://www.torproject.org/download/"
          }
        ]
      }>
        <p>A free and extremely secure browser created for the purpose of getting around government internet restrictions in countries like China, North Korea, Syria and now apparently the United Kingdom and United States. Use this instead of a VPN. It's free and robust, the only downside is that it's slow. Don't bother trying to stream video over this.</p>
      </Review>

      <h1>Least Terrible Normal Browser</h1>

      <Review title="Brave" links={
        [
          {
            name: "Homepage", 
            addr: "https://brave.com"
          },
          {
            name: "Download",
            addr: "https://brave.com/download/"
          }
        ]
      }>
        <p>Comes with a decent Ad Blocker and blocks trackers, but is also into shady crypto shit.</p>
        <p>I would recommend <Link to="/adblock">installing a proper Ad Blocker.</Link></p>
      </Review>



      <h1>Avoid</h1>
      <Review title="Google Chrome">
        <ul>
        <li>Google invented the concept of harvesting and selling personal information.</li>
        <li>They are viciously against Ad blockers. Currently it is not possible to install a fully functional Ad Blocker on Chrome</li>
        <li>Google is also known for creating custom software to enforce government censorship, particularly in China.</li>
        </ul>
      </Review>
    </>
  )
}

export default Browsers
