headgoesboom.com, www.headgoesboom.com {
  tls {
    dns cloudflare
  }

  redir https://thepatrick.io/
}
