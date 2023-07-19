import React from 'react'
import './Skills.css'
import { FaCss3Alt, FaHtml5, FaJs, FaGitAlt, FaReact, FaNodeJs, FaBootstrap, FaNpm } from 'react-icons/fa6'

const Skills = () => {
  return (
    <div className="header">
        <h1>Skills</h1>
        <div className="items">
            <FaHtml5 className="skills-pack" />
            <FaCss3Alt className="skills-pack"/>
            <FaJs className="skills-pack"/>
            <FaGitAlt className="skills-pack"/>
            <FaBootstrap className="skills-pack"/>
            <FaReact className="skills-pack"/>
            <FaNodeJs className="skills-pack"/>
            <FaNpm className="skills-pack"/>
        </div>
    </div>
  )
}

export default Skills