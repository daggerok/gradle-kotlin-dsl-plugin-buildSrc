# gradle-kotlin-dsl-plugin-buildSrc
Simple internal (located in `buildSrc`) Gradle plugin example, written in Kotlin using Gradle Kotlin DSL

- GitHub [Pages](https://daggerok.github.iogradle-kotlin-dsl-plugin-buildSrc/) documentation
- GitHub [daggerok/gradle-kotlin-dsl-plugin-buildSrc](https://github.com/daggerokgradle-kotlin-dsl-plugin-buildSrc) repository 

## generate a project

```bash
gradle init --type=basic --dsl=kotlin --project-name=gradle-kotlin-dsl-plugin-buildSrc
```

## create buildSrc

```bash
mkdir -p buildSrc/src/main/kotlin/com/github/daggerok/plugin
```

## configure plugin

create `buildSrc/build.gradle.kts` file:

```kotlin
plugins {
  `kotlin-dsl`
}

repositories { // required by kotlin-dsl plugin dependencies
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

configure<KotlinDslPluginOptions> {
  experimentalWarning.set(false)
}
```

## plugin implementation

### prepare structure for your configuration extension

create `./buildSrc/src/main/kotlin/com/github/daggerok/plugin/HelloPlugin.kt` file:

```kotlin
open class HelloExtension {
  var greeting: String? = "Hello"
  var name: String? = "buddy"
}
```

### prepare plugin

```kotlin
open class HelloPlugin : Plugin<Project> {
  override fun apply(project: Project): Unit = project.run {
    val hello = project.extensions.create<HelloExtension>("HelloExtension")
    project.extensions.add("hello", hello)
    tasks.register("hello") {
      doLast {
        println("${hello.greeting?.capitalize()}, ${hello.name?.capitalize()}!")
      }
    }
  }
}
```

## plugin usage

```kotlin
plugins {
  hello
}

hello {
  greeting = "hola"
  name = "pablo"
}
```

```bash
./gradlew hello
# output
Hola, Pablo!
```

## resources

- [Writing Custom Plugins](https://docs.gradle.org/current/userguide/custom_plugins.html)
- [Gradle Kotlin DSL samples](https://github.com/gradle/kotlin-dsl/tree/master/samples)
- [Gradle Kotlin DSL Primer](https://docs.gradle.org/current/userguide/kotlin_dsl.html#sec:kotlin-dsl_plugin)
- [Gradle Tutorials](https://gradle.org/guides/)
