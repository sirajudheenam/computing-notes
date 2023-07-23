// https://codesandbox.io/s/react-challenge-dev-profile-starter-ng0ghj
import React, { useState, useEffect } from 'react'
import '../styles/score_card.css'

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
]

function Avatar({ login }) {
  const [data, setData] = useState([]) //null or " "
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!login) return
    setLoading(true)
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
  }, [login]) // If login changes, call this useEffect function

  if (loading) return <h1>Loading data ....</h1>

  if (error) return <pre>{JSON.stringify(error, null, 2)} </pre>

  if (!data) return null

  return (
    <div className="avatar">
      <img alt={data.login} src={data.avatar_url} className="avatar" />
    </div>
  )
}
function Intro() {
  return (
    <div className="intro">
      <h1>Sirajudheen Mohamed Ali</h1>
      <p>This is about me.</p>
      Intro
    </div>
  )
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          key={skill.color}
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  )
}
function Skill({ skill, level, color }) {
  // const emoji1 = level === "beginner" ? '👶🏽' : ''
  // const emoji2 = level === "intermediate" ? '👍' : ''
  // const emoji3 = level === "advanced" ? '💪' : ''

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      {/* <span>{emoji1 || emoji2 || emoji3}</span> */}
      <span>
        {level === 'beginner' && '👶🏽'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪'}
      </span>
    </div>
  )
}
function ScoreCard({ login }) {
  return (
    <div className="div-html">
      <div className="div-body">
        <div className="card">
          <Avatar login={login} />
          <div className="data">
            <Intro />
            {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
            <SkillList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScoreCard
