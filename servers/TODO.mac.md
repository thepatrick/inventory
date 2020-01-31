# Make fish the default shell

Should be as simple as adding the `users` role, and overriding the `users` variable so we can set the shell

```yaml
users:
- name: patrick
  github_username: thepatrick
  groups: sudo
  shell: /usr/bin/fish
```

# Default apps on a macOS machine

```bash
  brew_if_missing mas /usr/local/bin/mas

  mas_if_missing 497799835 /Applications/Xcode.app
  
  brew_cask_if_missing 1password "/Applications/1Password 7.app"
  brew_cask_if_missing iterm2 /Applications/iTerm.app
  brew_cask_if_missing keybase /Applications/Keybase.app
  brew_cask_if_missing slack /Applications/Slack.app
  brew_cask_if_missing transmit "/Applications/Transmit.app"
  brew_cask_if_missing gpg-suite "/Applications/GPG Keychain.app"

  brew_if_missing thefuck /usr/local/bin/thefuck
  brew_if_missing hub /usr/local/bin/hub
  brew_if_missing carthage /usr/local/bin/carthage
  brew_if_missing awscli /usr/local/bin/aws
  brew_if_missing jq /usr/local/bin/jq
  brew_if_missing moreutils /usr/local/bin/ts
  brew_if_missing yarn /usr/local/bin/yarn
```

# Visual Code (Insiders) Extensions

```bash
  add_vscode_extension_if_missing code-insiders chenxsan.vscode-standardjs
  add_vscode_extension_if_missing code-insiders mohsen1.prettify-json
  add_vscode_extension_if_missing code-insiders PeterJausovec.vscode-docker
  add_vscode_extension_if_missing code-insiders christian-kohler.npm-intellisense
  add_vscode_extension_if_missing code-insiders christian-kohler.path-intellisense
  add_vscode_extension_if_missing code-insiders CoenraadS.bracket-pair-colorizer
  add_vscode_extension_if_missing code-insiders dbaeumer.vscode-eslint
  add_vscode_extension_if_missing code-insiders EditorConfig.EditorConfig
  add_vscode_extension_if_missing code-insiders eg2.vscode-npm-script
  add_vscode_extension_if_missing code-insiders esbenp.prettier-vscode
  add_vscode_extension_if_missing code-insiders HookyQR.beautify
  add_vscode_extension_if_missing code-insiders JulioGold.vscode-smart-split-into-lines
  add_vscode_extension_if_missing code-insiders kumar-harsh.graphql-for-vscode
  add_vscode_extension_if_missing code-insiders mauve.terraform
  add_vscode_extension_if_missing code-insiders miclo.sort-typescript-imports
  add_vscode_extension_if_missing code-insiders ms-python.python
  add_vscode_extension_if_missing code-insiders ms-vscode.cpptools
  add_vscode_extension_if_missing code-insiders ms-vscode.Go
  add_vscode_extension_if_missing code-insiders ms-vscode.vscode-typescript-tslint-plugin
  add_vscode_extension_if_missing code-insiders redhat.vscode-yaml
  add_vscode_extension_if_missing code-insiders rogalmic.bash-debug
  add_vscode_extension_if_missing code-insiders stringham.move-ts
  add_vscode_extension_if_missing code-insiders torn4dom4n.latex-support
  add_vscode_extension_if_missing code-insiders gamunu.vscode-yarn
```



# Smart cards

0. Pair a card
1. Require Smart Card profile (maybe remove the disable pairing configuration)
2. sudo stuff

```
/etc/pam.d/authorization_ctk:auth       required       pam_smartcard.so 		use_first_pass pkinit
/etc/pam.d/screensaver_ctk:auth       required       pam_smartcard.so			use_first_pass
/etc/pam.d/sudo:auth       sufficient     pam_smartcard.so
```