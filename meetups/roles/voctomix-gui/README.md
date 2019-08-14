# voctomix-gui

Manage and configure the GUI for the voctomix live editing software.

## Tasks

The tasks are divided this way:

* `tasks/main.yml`: Install and configure voctomix gui.

## Available variables

Main variables are:

* `debian_version`:                      Version of Debian, when using Debian.

* `voctomix_gui_display_system:          Rendering API (OpenGl, Vulkan, etc.) to
                                         use.

* `voctomix_gui_autostart`:              Start Voctoguio when X starts
                                         use.

* `voctomix_gui_server`:                 Where is voctocore running.

