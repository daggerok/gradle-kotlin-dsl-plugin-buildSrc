package com.github.daggerok.plugin

import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.kotlin.dsl.create

// https://docs.gradle.org/current/userguide/custom_plugins.html

open class HelloExtension(
  var greeting: String = "Hello",
  var name: String = "buddy"
)

class HelloPlugin : Plugin<Project> {
  override fun apply(project: Project): Unit = project.run {
    val hello = project.extensions.create<HelloExtension>("HelloExtension")
    project.extensions.add("hello", hello)
    tasks.register("hello") {
      doLast {
        println("${hello.greeting.capitalize()}, ${hello.name.capitalize()}!")
      }
    }
  }
}
