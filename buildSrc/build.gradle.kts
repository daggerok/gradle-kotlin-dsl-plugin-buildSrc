plugins {
  `kotlin-dsl`
}

configure<KotlinDslPluginOptions> {
  experimentalWarning.set(false)
}

// require
repositories {
  jcenter()
}

gradlePlugin {
  plugins {
    register("hello-plugin") {
      id = "hello"
      implementationClass = "com.github.daggerok.plugin.HelloPlugin"
    }
  }
}
