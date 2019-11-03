export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dbf2abf4635ae293824ecee',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-yex672qt',
                  apiId: '5a0beaf1-254d-4c36-90f8-55820c246b00'
                },
                {
                  buildHookId: '5dbf2abfc79beb83f5d1f153',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-to8hr5bu',
                  apiId: 'b043f50e-e1fd-437b-8eac-042f793ce42c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ochieng424/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-to8hr5bu.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
