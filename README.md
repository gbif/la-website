## Quick start guide for the Living Atlases website



### Intro
The website use Jekyll. 

### How to add an news 

1. Create a new file in the __posts_ folder with the following schema **YYYY-MM-DD-Title-of-the-news.markdown**. 
2. This new file will be divided in 2 parts: the front matter, and the body
    - Inside the front matter, you will find all the mandatory variables needed for the document, but also for the _news.markdown_ page. Each field follow this format: **field_name: field_description**. The following fields are mandatory, but you can add other fields if necessary. 
    ```
    ---
    layout: single-news
    title:  "<Full title of the news"
    date: release date using this format YYYY-MM-DD
    date_shown: date shown on the page using this format Month DD, YYYY
    categories: news
    authors: List of the authors with their institution
    summary: Summary of the news that you will find on the News page
    ---
    ```
    - The body with the following schema. You are free to add any other part or modify the existing ones. This is just an example. Be aware, if you change the number of # inside the file, you might have some CSS errors. **Do not add any CSS or html on the document**. 
    ```
    ### {{ page.title }}

    _Published by {{ page.date_shown }} by {{ page.authors}}_

    You can write the news here. If you want to add a link to an internal or external page, you can do it following this : [Anchor of the link](URL of the link).

    You will find some basic markdown syntax here: https://www.markdownguide.org/basic-syntax/

    DO NOT ADD ANY CSS OR HTML ON THE PAGE
    ```
4. The news will be automatically added to the news page (sorted by date). 

### How to add a participant

#### Participant with live data portal
1. Create a new file in the __participants_ folder with the extension (.md for markdown). The name does not matter, but we recommand to use the name of the institution for clarity. There is **no html or css code** inside this file. It is quite easy to maintain for non tech people.  

2. This file will be divided in 2 parts : the front matter, and the body. 
    - Inside the front matter, you will find all the variables needed for the document, but also for the participants tab inside the _about.markdown_ page. Each field follow this format: **field_name: field_description**. The following fields are mandatory, but you can add other fields if needed after "status". 
   
            --- 
            layout: participant
            institution: <name of the institution hosting the data portal (e.g. Atlas of Living Australia)>
            country: <name of the country hosting the data portal>
            language: <list of the available language on the data portal>
            year: <launching year of the data portal based on the ALA platform>
            status: live
            ---
    - The body with the following schema. You are free to add any other part or modify the existing ones. This is just an example. Be aware, if you change the number of # inside the file, you might have some CSS errors. **Do not add any CSS or html on the document**, it will override the md language.  

    ```
    ## {{ page.institution }}

    [![<name of the institution>](/assets/img/participants/name_institution.png)](Link to the data portal)

    #### Description 
    Description of the data portal, and the team behind. This part will be validated by each team. You can add some statistics such as number of developers, development time, etc.

    Link to the data portal. Do not hesitate to see other participant pages for example.

    #### Modules Available 

    List of modules available inside the participant data portal. Add links, and remove non available modules. This list is baed on the ALA page. 

    | Name              | Link                                                                       | 
    | ------------------|----------------------------------------------------------------------------|
    | Collectory        | [https://collections.ala.org.au/](https://collections.ala.org.au/)         |
    | Biocache          | [https://biocache.ala.org.au/](https://biocache.ala.org.au/ )              |
    | Biocache Service  | [https://biocache.ala.org.au/ws](https://biocache.ala.org.au/ws )          |
    | Species           | [https://bie.ala.org.au/](https://bie.ala.org.au/)                         |
    | Species service   | [https://bie.ala.org.au/ws](https://bie.ala.org.au/ws)                     | 
    | Species list      | [https://lists.ala.org.au/](https://lists.ala.org.au/)                     |  
    | Regions           | [https://regions.ala.org.au/](https://regions.ala.org.au/)                 |
    | Images            | [https://images.ala.org.au/](https://images.ala.org.au/)                   |
    | Spatial           | [https://spatial.ala.org.au/](https://spatial.ala.org.au/)                 |
    | CAS               | [https://auth.ala.org.au/cas/](https://auth.ala.org.au/cas/)               |
    | Sightings         | [https://sightings.ala.org.au/](https://sightings.ala.org.au/)             |
    | Alerts            | [https://alerts.ala.org.au/](https://alerts.ala.org.au/)                   |
    | Volunteers        | [https://volunteer.ala.org.au/](https://volunteer.ala.org.au/)             |
    | Logger            | [https://logger.ala.org.au/](https://logger.ala.org.au/)                   |
    | Sandbox           | [https://sandbox.ala.org.au/](https://sandbox.ala.org.au/)                 |
    | Dashboard         | [https://dashboard.ala.org.au/](https://dashboard.ala.org.au/)             |
    | User details      | [https://auth.ala.org.au/userdetails](https://auth.ala.org.au/userdetails) |
    | Biocollect        | [https://www.ala.org.au/biocollect/](https://www.ala.org.au/biocollect/)   |
    | Phylolink         | [https://phylolink.ala.org.au/](https://phylolink.ala.org.au/)             |
    | DOI               | [https://doi.ala.org.au/](https://doi.ala.org.au/)                         |

    #### Resources

    List of resources available (GitHub Account, Documentation, Twitter account, etc.)

    - Code: [Title](Link)
    - Documentation: [Title](Link)
    - End-user Documentation: [Title](Link)
    - Twitter Account: [Title](Link)
    - etc.

    For more information, you may contact [name of developers or team members] on Slack.
    ```


#### Participant without a live data portal

Add the following information (NA when data not available) on the CSV participant_development file inside the __data_ folder:
      ```
      institution,country,language,status
      ```

The status can be _Under development_ or _In discussion_.

The participant will be automatically added to the list.    

### How to add an event 

1. Create a new file in the __events_ folder with the extension (.md for markdown). The name does not matter. There is **no html or css code** inside this file. It is quite easy to maintain for non tech people.  
2. Participant list (see example below):
    - Create a new CSV file in the __data/events_ folder using the name of the event. 
    - The mendatory fields of the header are: name, organisation and country (using this ortographe). You can add other fields if you want. 
    - Add the list of the participants (you can add as many as participant you need)
      ```
      name,organisation,country
      Héctor Armando Hernández Samayoa, CONAP Consejo Nacional de Areas Protegida, Guatemala
      Reuben Roberts, National Biodiversity Network, United Kingdom
      Kourouma Koura, GBIF Benin, Benin
      ```
3. This file will be divided in 2 parts : the front matter, and the body. 
    - Inside the front matter, you will find all the variables needed for the document, but also for the _events.markdown_ page. Each field follow this format: **field_name: field_description**. The following fields are mandatory, but you can add other fields if needed after "status". 
   
            --- 
            layout: single-page
            title: <name of the event>
            date: <starting_date using the following format YYYY-MM-DD>
            date_shown: <date shown on the events page with the format YYYY-MM-DD to YYYY-MM_DD>
            type: <choose between: workshop, conference, online conference, or any new type of events>
            status: <choose between: Finished, In progress, Soon>
            ---
     
            
    - The body with the following schema. You are free to add any other part or modify the existing ones. This is just an example. Be aware, if you change the number of # inside the file, you might have some CSS errors. **Do not add any CSS or html on the document**.  

      ```
      ## {{ page.title }}
      
      #### Description 
      
      Description of the event. These are some example of useful information that you can add to the page:
        - goal of the event;
        - place of the event;
        - link to the project (if exist)

      You will find some basic markdown syntax here: https://www.markdownguide.org/basic-syntax/

      DO NOT ADD ANY CSS OR HTML ON THE PAGE
        
      #### Participants 
  
      | Name | Organization | Country |
      |------|--------------|---------|
      {% for participant in site.data.events.participant_list -%}
      | {{ participant.name }}  | {{ participant.organisation }}  | {{ participant.country }}
      {% endfor %}
      
      >> We recommand to copy and paste the above table to avoid any mistake. Replace participant_list with the name of your CSV file (participant list created before). 

      #### Resources 

      ##### Presentations & Exercises
          List of presentations and/or exercises made during the event:
          - Day 1: [Name of the presentation](URL to the presentation) (PPT, Google Folder, or website) done by ...
          - Day 2: [Name of the presentation](URL to the presentation) (PPT, Google Folder, or website) done by ...
          - Exercises: [Name of the document](URL to the document) created by ....
         
      ##### Resources 
          - [Agenda](URL to the agenda)
          - [Official Website of the event](URL to the website)
          - usefull links 

      ##### Photos
      ```
4. The event will be automatically added to the events page (sorted by date). 

### Licence
Apache-2.0 © [Living Atlases](https://living-atlases.gbif.org)
