package com.github.daggerok.plugin

import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.api.model.ObjectFactory
import org.gradle.kotlin.dsl.create
import org.gradle.kotlin.dsl.newInstance

open class MoreAdvancedPluginExtension @javax.inject.Inject constructor(val objectFactory: ObjectFactory) {
  var greeting: String? = "Hello"
  var name: String? = "buddy"
  var shouldCreateAnObject: Boolean = false
  fun createAnObject() = println(
      "${MoreAdvancedPluginExtension::class.simpleName}: ${objectFactory.newInstance<MoreAdvancedPluginExtension>()}"
  )
}

open class MoreAdvancedPlugin : Plugin<Project> {
  override fun apply(project: Project): Unit = project.run {
    val adv = project.extensions.create<MoreAdvancedPluginExtension>("MoreAdvancedPluginExtension")
    project.extensions.add("adv", adv)
    tasks.register("adv") {
      doLast {
        println("${adv.greeting}, ${adv.name?.capitalize()}!")
        if (adv.shouldCreateAnObject) adv.createAnObject()
      }
    }
  }
}
