headgoesboom.com, www.headgoesboom.com {
  tls {
    dns route53
  }

  redir https://thepatrick.io/
}
