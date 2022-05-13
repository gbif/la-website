---
layout: participant
institution: Swedish Biodiversity Data Infrastructure
country: Sweden
language: English
year: 2016
support: support@biodiversitydata.se
status: live
---

## {{ page.institution }}

{% include browser-frame.html country="se" %}

#### Description
[SBDI BioAtlas](https://biodiversitydata.se/) is an open-source e-infrastructure with microservices-based architecture. The infrastructure makes biodiversity data available, provide powerful analysis and visualization tools offering new opportunities for innovative and interdisciplinary research on biodiversity and ecosystems. The core mission of SBDI is to support Open Science and the FAIR (Findable, Accessible, Interoperable, Reusable) principles in biodiversity and ecosystems research. The infrastructure is financed by the Swedish Research Council and the SBDI consortium includes 11 universities and government agencies in Sweden and the Swedish node of the Global Biodiversity Information Facility (GBIF).

The e-infrastructure comprises primarily of a set of ALA components deployed as docker services on a cluster of host machines running on OpenStack cloud infrastructure. The ALA modules/components and their necessary back-end components (database, search index, webserver, proxy ) run as individual docker services with Docker swarm used as the container orchestration tool. Named volumes are used for persisting data generated and used by the docker containers.

#### Resources

- Code: [GitHub account](https://github.com/bioatlas/ https://github.com/biodiversitydata-se)
- Docker images: [Docker images of components](https://hub.docker.com/u/bioatlas/)
- Building and releasing components: [BioAtlas Travis CI](https://travis-ci.org/bioatlas/)
- End-User Documentation: [How to use the BioAtlas](https://docs.biodiversitydata.se/)

#### Modules Available

| Name             | Link                                                                                         |
|------------------|----------------------------------------------------------------------------------------------|
| Collectory       | [https://collections.biodiversitydata.se/](https://collections.biodiversitydata.se/)         |
| Biocache         | [https://records.biodiversitydata.se/](https://records.biodiversitydata.se/)                 |
| Biocache Service | [https://records.biodiversitydata.se/ws/](https://records.biodiversitydata.se/ws/)           |
| Species          | [https://species.biodiversitydata.se/](https://species.biodiversitydata.se/)                 |
| Species service  | [https://species.biodiversitydata.se/ws/](https://species.biodiversitydata.se/ws/)           |
| Species list     | [https://lists.biodiversitydata.se/](https://lists.biodiversitydata.se/)                     |
| SDS              | [https://sds.biodiversitydata.se/](https://sds.biodiversitydata.se/)                         |
| Images           | [https://images.biodiversitydata.se/](https://images.biodiversitydata.se/)                   |
| Spatial Portal   | [https://spatial.biodiversitydata.se/](https://spatial.biodiversitydata.se/)                 |
| Regions          | [https://regions.biodiversitydata.se/](https://regions.biodiversitydata.se/)                 |
| Logger           | [https://logger.biodiversitydata.se/](https://logger.biodiversitydata.se/)                   |
| Dashboard        | [https://dashboard.biodiversitydata.se/](https://dashboard.biodiversitydata.se/)             |
| CAS              | [https://auth.biodiversitydata.se/cas](https://auth.biodiversitydata.se/cas)                 |
| User details     | [https://auth.biodiversitydata.se/userdetails/](https://auth.biodiversitydata.se/userdetails/) |
| Apikey           | [https://auth.biodiversitydata.se/apikey](https://auth.biodiversitydata.se/apikey)           |
| Biocollect       | [https://biocollect.biodiversitydata.se/](https://biocollect.biodiversitydata.se/)           |
| Ecodata          | [https://ecodata.biodiversitydata.se/](https://ecodata.biodiversitydata.se/)                 |

In addition to the ALA modules, SBDI provides an integrated R server environment (Mirroreum), an interface to sequence-based observations (Swedish ASV portal) and a Citizen science portal (BioAtlas Citizen Science)

| Name             | Link                                                                                         |
|------------------|----------------------------------------------------------------------------------------------|
|Mirroreum         |[https://mirroreum.biodiversitydata.se/](https://mirroreum.biodiversitydata.se/)              |
|ASV Portal        |[https://asv-portal.biodiversitydata.se/](https://asv-portal.biodiversitydata.se/)            |
|Citizen Science   |[https://ctzn.biodiversitydata.se/](https://ctzn.biodiversitydata.se/)                        |

For more information, please contact [SBDI support](https://docs.biodiversitydata.se/support/).
