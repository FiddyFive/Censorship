import Review from "../review/review"

function IDRoot() {
  return(
    <>
      <h1>DISCLAIMER</h1>
      <b>
        <div>The purpose of this page is to allow ADULTS to maintain their privacy and browse the internet safely and securely.</div>
        <div>This is NOT to be used as a means to lie about your age.</div>
        <p>If your are under the age of 18, please leave this site immediately.</p>
      </b>

      <h1>Context</h1>
      <div>In 2025, the United Kingdom, United States, Canada, European Union and Australia proposed laws that would require you to present your ID to access many sites, including extrememly important websites such as Wikipedia. These laws were proposed under the guise of "Child Safety" and while they are targeting adult websites, they are also targeting both Apple Maps and Google Maps. It is hard to see a law that requires presenting identification in order to use social media and GPS applications as anything other than a surveillance program.</div>
      <p>This is obviously unacceptable as this provides an immeasurable risk to the privacy, security and safety of all who use the internet. Data breaches happen. Often. <del>It will not be too long before people's identities fall into the hands of criminals.</del> <ins>It took less than 2 months for a data breach to occur resulting in stolen identification.</ins></p>
      <p>The most obvious outcome of this is identity theft. This is the hardest form of fraud to recover from and even a single leaked identification document can ruin a person's life.</p>
      <p>An additional threat is the violation of the privacy of countless people who would rather maintain their anonymity. For example "V-Tubers" are a category of online entertainer, many of whom are contractually obligated to keep their personal details private. Such a leak could cause them to lose their livelihood.</p>
      <p>In protest of these laws, this page will provide you with everything we know of to get around them.</p>

      <h1>REAL INCIDENTS</h1>
      <div>Just so you know this is actually an issue and not paranoia:</div>

      <h2>Discord September 20 Data Breach</h2>
      <div className="external">
        <a href="https://discord.com/press-releases/update-on-security-incident-involving-third-party-customer-service" className="button">Official Press Release</a>
        <a href="https://web.archive.org/web/20251003231234/https://discord.com/press-releases/update-on-security-incident-involving-third-party-customer-service" className="button">Archived Press Release</a>
      </div>
      <br />
      <b>Leaked information:</b>
      <ul>
        <li><b>Government Issued ID</b></li>
        <li>Real name</li>
        <li>E-mail address</li>
        <li>Phone number</li>
        <li>IP Address</li>
        <li>Last four digits of your credit card</li>
      </ul>

      <h1>Know The Enemy</h1>
      <div>This law will impact millions of people who use the internet daily. Obviously, having a real person verify every single ID that comes in is impossible. In reality, the verification process uses AI tools to automate this process. These tools are still very primitive and very easy to fool.</div>

      <h1>Information for Specific Sites</h1>
      <div className="external">
        <a href="https://gist.github.com/mary-ext/6e27b24a83838202908808ad528b3318" className="button">Bluesky</a>
      </div>

      <h1>Tools</h1>
      <Review title="OBS" links={
        [
          {
            name: "Website",
            addr: "https://obsproject.com/"
          },
          {
            name: "Download",
            addr: "https://obsproject.com/download"
          }
        ]
      }>
        <p>OBS is best known as a streaming and screen recording software. The main use we will have for it is it's ability to create a virtual webcam using your screen as a video source. This is very useful for applications that try to verify you via webcam.</p>
      </Review>

      <Review 
        title="Face Tool" 
        links={
          [{
            name: "Face Tool",
            addr: "/facetool"
          }]
        }
        internal
      >
        <p>Face Tool</p>
      </Review>
      
      <h1>Games</h1>
      <div>Surprisingly video games are the best way to bypass verification at the moment.</div>
      <Review title="Garry's Mod" links={
        [{
          name: "Steam",
          addr: "https://store.steampowered.com/app/4000/Garrys_Mod/"
        }]
      }>
        <p>Garry's Mod comes with a wide range of characters built in and an extrememly versatile face posing system. However as the characters come from a game that is over 20 years old, they do not look very realistic. Currently they are able to fool verification AIs, but this may change in the future.</p>
      </Review>

      <Review title="Death Stranding" links={
        [{
          name: "Steam",
          addr: "https://store.steampowered.com/app/1850570/DEATH_STRANDING_DIRECTORS_CUT/"
        }]
      }>
        <p>Death Stranding has a photo mode which allows you to pose the main character's face. Death Stranding is more expensive than Garry's Mod and requires a better computer to run, but comes with the advantage of a much more realistic looking character which is likely to fool AIs for longer.</p>
      </Review>

      <h1>AI</h1>
      <Review title="This Person Does Not Exist" links={
        [{
          name: "Website",
          addr: "https://thispersondoesnotexist.com/"
        }]
      }>
        <br />
        <img src="thispersondoesnotexist.jpg" width={128} alt='AI generated "photograph" of a woman who does not exist.'/>
        <p>Ironically, several of our tools to defeat the AI are themselves AI. "This Person Does Not Exist" is the classic fake face generator. If a site asks for a photo of your face, you can hop over here and refresh until you find a face you like.</p>
        <p>This simplicity does have a drawback; some services will ask you to pose your face a certain way, for example looking to the left or with your mouth open.</p>
        <b>PROS:</b>
        <ul>
          <li>Fast</li>
          <li>Easy to use</li>
          <li>Free</li>
        </ul>
        <b>CONS:</b>
        <ul>
          <li>No customisation, all faces will have roughly the same pose</li>
          <li>Unable to create a consistent appearance</li>
          <li>Still images may not work with webcam verification</li>
        </ul>
      </Review>
      
      <Review title="ChatGPT" links={
        [{
          name: "Website",
          addr: "https://chatgpt.com/"
        }]
      }>
        <br />
        <img src="ChatGPT_Side_Profile.png" width={128} alt='AI generated "photograph" of a man who does not exist. The man is facing to the left.' />
        <img src="ChatGPT_Open_Mouth.png" width={128} alt='AI generated "photograph" of a man who does not exist. The man is facing to the left. His mouth is open.' />
        <p>ChatGPT has access to a powerful image generation model that you can interact with in natural language. This allows for creation of more consistent appearances and specific posing.</p>
        <p>The first image above was generated with the following prompt: "Generate me a photograph of a man from the shoulders up, side profile, looking left"</p>
        <div>The followup image was generated by continuing the conversation with "Recreate that image with his mouth open"</div>
        <b>PROS:</b>
        <ul>
          <li>Easy to use</li>
          <li>Can specify details of appearance and pose</li>
          <li>Can alter previously generated images to change the pose believably.</li>
        </ul>
        <b>CONS:</b>
        <ul>
          <li>Free tier can only generate 3 images per day.</li>
          <li>Slow</li>
          <li>Still images may not work with webcam verification</li>
        </ul>
      </Review>
    </>
  )
} 

export default IDRoot
