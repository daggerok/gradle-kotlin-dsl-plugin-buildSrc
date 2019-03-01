import org.gradle.api.tasks.wrapper.Wrapper.DistributionType.BIN

// gradle init --type=basic --dsl=kotlin --project-name=gradle-kotlin-dsl-plugin-buildSrc
plugins {
  hello
  base
  id("com.moowork.node") version "1.2.0"
}

hello {
  greeting = "Привет"
  name = "Бадя-бадя"
}

node {
  download = true
  version = "10.9.0"
  npmVersion = "6.8.0"
}

tasks.create("start")
tasks["start"].dependsOn("npm_start")
tasks["build"].dependsOn("npm_run_build")

defaultTasks("build")

tasks.withType<Wrapper> {
  gradleVersion = "5.2.1"
  distributionType = BIN
}
