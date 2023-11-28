import ProjectCard from "./ProjectCard"
import SkillsLabel from "./SkillsLabel"
import './Main.css';
import './Focusbox.css'
const Main =()=>{
    return(
        <main className="mainstyle">
          <section>
          <h2>PROJECTS</h2>
          <article>
          <ProjectCard
            title={'Project 1'}
            />
            <ProjectCard
              title={'Project 2'}
            />
            <ProjectCard
              title={'Project 3'}
            />
          </article>
          </section>
          <section>
            <h2>SKILLS</h2>
            <article>
                <SkillsLabel
                label={'HTML'}
                />
                 <SkillsLabel
                label={'CSS'}
                />
                  <SkillsLabel
                label={'JavaScript'}
                />
                  <SkillsLabel
                label={'React'}
                />
                  <SkillsLabel
                label={'SASS'}
                />
                  <SkillsLabel
                label={'Tailwind CSS'}
                />
                  <SkillsLabel
                label={'Git'}
                />
                  <SkillsLabel
                label={'UI/UX'}
                />
            </article>
          </section>
        </main>
    )
}
export default Main