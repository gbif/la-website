---
layout: participant
institution: BioAtlas Sweden
country: Sweden
language: English
year: 2016
status: live
---

## {{ page.institution }}

[![BioAtlas Sweden](/assets/img/participants/BioAtlas_Sweden.png)](https://bioatlas.se/)

#### Description 
[BioAtlas Sweden Data Portal](https://bioatlas.se/) is a multi-container Docker application based on ALA components deployed together as Docker services. Each of the ALA modules/components and their necessary backend components (database, search index, webserver, proxy ) run in individual docker containers. Named volumes are used for persisting data generated and used by the docker containers.

#### Modules Available 

| Name              | Link                                                                         | 
| ------------------|------------------------------------------------------------------------------|
| Collectory		| [https://collections.bioatlas.se/](https://collections.bioatlas.se/)         |
| Biocache          | [https://records.bioatlas.se/](https://records.bioatlas.se/)                 |
| Biocache Service  | [https://records.bioatlas.se/ws/](https://records.bioatlas.se/ws/)           |
| Species           | [https://species.bioatlas.se/](https://species.bioatlas.se/)                 |
| Species service   | [https://species.bioatlas.se/ws/](https://species.bioatlas.se/ws/)           | 
| Species list      | [https://lists.bioatlas.se/](https://lists.bioatlas.se/)                     |  
| Regions           | [https://regions.bioatlas.se/](https://regions.bioatlas.se/)                 |
| Images            | [https://images.bioatlas.se/](https://images.bioatlas.se/)                   |
| Spatial           | [https://spatial.bioatlas.se/](https://spatial.bioatlas.se/)                 |
| CAS               | [https://auth.bioatlas.se/cas](https://auth.bioatlas.se/cas)                 |
| Logger            | [https://logger.bioatlas.se/](https://logger.bioatlas.se/)                   |
| User details      | [https://auth.bioatlas.se/userdetails](https://auth.bioatlas.se/userdetails) |

#### Resources

- Code: [BioAtlas GitHub account](https://github.com/bioatlas/ala-docker)
- Docker images: [ALA components packages](https://hub.docker.com/u/bioatlas/)
- Building and releasing components: [BioAtlas Travis CI](https://travis-ci.org/bioatlas/)
- Documentation: [Usage instructions for deploying the system](https://bioatlas.github.io/)
- End-User Documentation: [How to use the BioAtlas](https://bioatlas.se/how-to-use-the-bioatlas/)
- Twitter Account: [@gbifsweden](https://twitter.com/gbifsweden)

For more information, you may contact Manash Shah on Slack.
