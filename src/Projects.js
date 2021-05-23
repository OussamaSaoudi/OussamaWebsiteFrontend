import React from 'react'
import Project from './Project'
const Projects = () => {
  const projectList = [
    {
      title: 'Orate-io',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas integer eget aliquet. Amet nulla facilisi morbi tempus iaculis urna id. Pellentesque habitant morbi tristique senectus et netus et. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Non consectetur a erat nam. Ridiculus mus mauris vitae ultricies leo integer. Eget nulla facilisi etiam dignissim. Quis risus sed vulputate odio. Maecenas sed enim ut sem viverra. Venenatis tellus in metus vulputate eu. Ut aliquam purus sit amet. Facilisis sed odio morbi quis commodo odio aenean sed. Ut faucibus pulvinar elementum integer enim. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
      tags: [
        'Java'
      ]
    },
    {
      title: 'Labyrinth',
      content: 'Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Amet nulla facilisi morbi tempus iaculis. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Aenean et tortor at risus viverra adipiscing at. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Id aliquet risus feugiat in ante metus dictum. Convallis tellus id interdum velit. Amet aliquam id diam maecenas ultricies mi. Vel turpis nunc eget lorem dolor. Auctor elit sed vulputate mi sit amet mauris. Viverra justo nec ultrices dui. Elementum tempus egestas sed sed risus pretium. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Est velit egestas dui id ornare. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Amet porttitor eget dolor morbi non arcu. Leo urna molestie at elementum eu facilisis sed. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est.',
      tags: [
        'Java'
      ]
    },
    {
      title: 'Personal Website',
      content: 'Interdum consectetur libero id faucibus nisl tincidunt eget. At consectetur lorem donec massa sapien faucibus et. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Mauris pellentesque pulvinar pellentesque habitant morbi. Quam lacus suspendisse faucibus interdum. A diam sollicitudin tempor id. Faucibus vitae aliquet nec ullamcorper. Diam quis enim lobortis scelerisque fermentum dui faucibus. Tincidunt eget nullam non nisi est sit amet. Tincidunt eget nullam non nisi. Iaculis at erat pellentesque adipiscing commodo. Felis eget velit aliquet sagittis. Vulputate mi sit amet mauris commodo. Est ante in nibh mauris cursus mattis. Suspendisse sed nisi lacus sed viverra tellus. Lacus vestibulum sed arcu non odio euismod lacinia. Risus nec feugiat in fermentum posuere urna nec tincidunt.',
      tags: [
        'Java'
      ]
    },
    {
      title: 'OpenJ9',
      content: 'Id ornare arcu odio ut sem nulla. Sed lectus vestibulum mattis ullamcorper velit. Turpis egestas pretium aenean pharetra. Velit aliquet sagittis id consectetur. Egestas pretium aenean pharetra magna ac placerat vestibulum. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Phasellus egestas tellus rutrum tellus pellentesque eu. Laoreet id donec ultrices tincidunt arcu. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Eget nunc lobortis mattis aliquam. Nec nam aliquam sem et tortor. Accumsan in nisl nisi scelerisque eu ultrices vitae. Tristique senectus et netus et malesuada fames. Tristique senectus et netus et malesuada fames. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Congue mauris rhoncus aenean vel. Tellus in hac habitasse platea.',
      tags: [
        'Java'
      ]
    },
    {
      title: 'Autonomous Vehicles',
      content: 'Netus et malesuada fames ac turpis egestas sed tempus urna. Orci ac auctor augue mauris augue neque gravida in fermentum. Pellentesque habitant morbi tristique senectus. Blandit volutpat maecenas volutpat blandit. Pellentesque eu tincidunt tortor aliquam. Quis commodo odio aenean sed adipiscing diam donec. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Id interdum velit laoreet id donec ultrices. Rhoncus est pellentesque elit ullamcorper dignissim cras. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Adipiscing enim eu turpis egestas pretium aenean. Mattis nunc sed blandit libero volutpat sed.',
      tags: [
        'Java'
      ]
    }
  ]
  return (
    <div>
      <h3>Here&apos;s some of my work:</h3>
      <ul>
        {
          projectList.map((project, index) =>
            <Project key={index} title={project.title} content={project.content} tags={project.tags} />
          )}
      </ul>
    </div>
  )
}
export default Projects