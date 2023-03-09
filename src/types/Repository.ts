export interface Repository {
  id: string,
  name: string,
  owner: {
    login: string,
  }
  description: string,
  html_url: string,
}
