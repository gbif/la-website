---
layout: participant
institution: Swedish Biodiversity Data Infrastructure
---

## {{ page.institution }}

{% include browser-frame.html country="se" %}

#### Description
[SBDI BioAtlas](https://biodiversitydata.se) is an open-source e-infrastructure with microservices-based architecture. The infrastructure makes biodiversity data available, provide powerful analysis and visualization tools offering new opportunities for innovative and interdisciplinary research on biodiversity and ecosystems. The core mission of SBDI is to support Open Science and the FAIR (Findable, Accessible, Interoperable, Reusable) principles in biodiversity and ecosystems research. The infrastructure is financed by the Swedish Research Council and the SBDI consortium includes 11 universities and government agencies in Sweden and the Swedish node of the Global Biodiversity Information Facility (GBIF).

The e-infrastructure comprises primarily of a set of ALA components deployed as docker services on a cluster of host machines running on OpenStack cloud infrastructure. The ALA modules/components and their necessary back-end components (database, search index, webserver, proxy ) run as individual docker services with Docker swarm used as the container orchestration tool. Named volumes are used for persisting data generated and used by the docker containers.

#### Resources

- [GitHub account](https://github.com/biodiversitydata-se)
- [Docker images](https://github.com/orgs/biodiversitydata-se/packages)
- [End-User Documentation](https://docs.biodiversitydata.se)
- [Technical Documentation](https://github.com/biodiversitydata-se/documentation-overview)

#### Modules available

| Name             | Link                                                                                         |
|------------------|----------------------------------------------------------------------------------------------|
| Biocache         | [https://records.biodiversitydata.se](https://records.biodiversitydata.se)                   |
| Biocache service | [https://records.biodiversitydata.se/ws](https://records.biodiversitydata.se/ws)             |
| Collectory       | [https://collections.biodiversitydata.se](https://collections.biodiversitydata.se)           |
| Species          | [https://species.biodiversitydata.se](https://species.biodiversitydata.se)                   |
| Species service  | [https://species.biodiversitydata.se/ws](https://species.biodiversitydata.se/ws)             |
| Species lists    | [https://lists.biodiversitydata.se](https://lists.biodiversitydata.se)                       |
| Image service    | [https://images.biodiversitydata.se](https://images.biodiversitydata.se)                     |
| Spatial portal   | [https://spatial.biodiversitydata.se](https://spatial.biodiversitydata.se)                   |
| Spatial service  | [https://spatial.biodiversitydata.se/ws](https://spatial.biodiversitydata.se/ws)             |
| Regions          | [https://regions.biodiversitydata.se](https://regions.biodiversitydata.se)                   |
| Auth/CAS         | [https://auth.biodiversitydata.se/cas](https://auth.biodiversitydata.se/cas)                 |
| User details     | [https://auth.biodiversitydata.se/userdetails](https://auth.biodiversitydata.se/userdetails) |
| Apikey           | [https://auth.biodiversitydata.se/apikey](https://auth.biodiversitydata.se/apikey)           |
| Dashboard        | [https://dashboard.biodiversitydata.se](https://dashboard.biodiversitydata.se)               |
| Logger           | [https://logger.biodiversitydata.se](https://logger.biodiversitydata.se)                     |
| SDS              | [https://sds.biodiversitydata.se](https://sds.biodiversitydata.se)                           |
| Sensitive        | [https://sensitive.biodiversitydata.se](https://sensitive.biodiversitydata.se)               |
| Name matching    | [https://namematching.biodiversitydata.se](https://namematching.biodiversitydata.se)         |
| Data quality     | [https://data-quality-service.biodiversitydata.se](https://data-quality-service.biodiversitydata.se)|
| Biocollect       | [https://biocollect.biodiversitydata.se](https://biocollect.biodiversitydata.se)             |

In addition to the ALA modules, SBDI provides an interface to sequence-based observations (Swedish ASV portal) and a biologging portal.

| Name             | Link                                                                                         |
|------------------|----------------------------------------------------------------------------------------------|
|ASV Portal        |[https://asv-portal.biodiversitydata.se](https://asv-portal.biodiversitydata.se)              |
|Biologging Portal |[https://biologging.biodiversitydata.se](https://biologging.biodiversitydata.se)              |

For more information, please contact [SBDI support](https://docs.biodiversitydata.se/support).
