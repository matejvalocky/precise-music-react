// OBECNE CSS
import "./Content.css"
import "./Wrapper.css"

//KONKRETNE CSS
import "./AboutContent.css"

const AboutContent = () => {
  return (
    <div className="aboutContent content">
     <div className="wrapper">
       <h1>About me</h1>
       <div className="languageWrapper">
        <div className="aboutWrapper">
            <h2>Slovak</h2>
            <p>Predstavte si DJa, ktorý sa zamiloval do mixovania hudby už ako 15-ročný teenager. Začínal so štýlom House a neskôr presedlal na Drum and Bass. Jeho precíznosť pri výbere jednotlivých skladieb a prechodov sú úplne jedinečné a charakteristické pre jeho hudobné mixy. Samozrejme má aj svoje meno a priezvisko, no používa preudonym "Precise Music". Pri mixovaní trackov sa snaží dosiahnuť maximálny zážitok pre svojich poslucháčov.</p>
            <p>Precise Music sa nezameriava len na davovo obľúbené skladby, ale snaží sa objavovať a používať aj tie menej známe. Jeho snahou je priniesť nové zvuky a momenty prekvapenia, ktoré udržia publikum v stave maximálneho nadšenia po celú dobu jeho setu.</p>
            <p>Vďaka jeho zručnostiam a precíznosti pri mixovaní, dokáže Precise Music vytvoriť skutočne unikátne mixy, ktoré nadchnú každého poslucháča. Pri každom mixe si dáva záležať na tom, aby prechody medzi skladbami boli čo najpresnejšie a nevnímali sa ako násilné.</p>
            <p>Hudba nie je pre Precise Music len zábavou, ale skutočnou vášňou. Preto sa neustále snaží zdokonaľovať svoje umenie a hľadať nové spôsoby, ako zdokonaliť svoje mixy a priniesť ich na novú úroveň.</p>
            <p>Pri jeho vystúpeniach sa môžete tešiť na úplne nové zážitky a na hudobnú zážitok, ktorý vás neopustí ešte dlho po skončení jeho setu. Precise Music je skutočným majstrom svojho remesla a jeho vášeň pre hudbu vám urobí nezabudnuteľný zážitok.</p>
        </div>
        <div className="aboutWrapper">
            <h2>English</h2>
            <p>Imagine a DJ who fell in love with mixing music as a 15-year-old teenager. He started with House and later switched to Drum and Bass. His precision in choosing individual tracks and transitions are completely unique and characteristic of his music mixes. Of course he has his first and last name, but he uses the moniker "Precise Music". When mixing tracks, he strives to achieve the ultimate experience for his listeners.</p>
            <p>Precise Music doesn't just focus on the crowd favourites, but also tries to discover and use the lesser known tracks. He strives to bring new sounds and moments of surprise that keep the audience in a state of maximum excitement throughout his set.</p>
            <p>Thanks to his mixing skills and precision, Precise Music can create truly unique mixes that will thrill any listener. With each mix, he makes sure that the transitions between tracks are as precise as possible and not perceived as violent.</p>
            <p>For Precise Music, music is not just a pastime, but a true passion. That's why he's constantly striving to perfect his art and find new ways to improve his mixes and bring them to the next level.</p>
            <p>You can look forward to a whole new experience when he performs and a musical experience that won't leave you long after his set is over. Precise Music is a true master of his craft and his passion for music will make for an unforgettable experience.</p>
        </div>
       </div>
     </div>
    </div>
  )
}

export default AboutContent;
