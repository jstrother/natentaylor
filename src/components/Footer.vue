<template>
  <footer>
    <div class="nateDiv">
      <p>Art created by Nate Taylor</p>
      <a href="https://twitter.com/majorsheep" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-twitter-square"></i>
      </a>
      <a href="https://www.instagram.com/natentaylor/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
    <div class="jimDiv">
      <p>
        Website built by
        <a href="http://www.jimstrother.com" target="_blank" rel="noopener noreferrer">
          Jim Strother
        </a>
      </p>
      <a href="https://twitter.com/jimcodesjs" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-twitter-square"></i>
      </a>
      <a href="https://www.linkedin.com/in/jimstrother/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
footer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: $textColor;
  margin: auto;
  padding-top: 4em;
  text-align: center;

  .nateDiv,
  .jimDiv {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }

  p {
    margin-right: 0.5em;
  }

  i {
    font-size: 1.5em;
    margin: 0.25em;
    cursor: pointer;
  }

  .nateDiv {
    font-size: 1.5em;
  }

  .jimDiv {
    font-size: 0.75em;
  }

  a {
    color: $textColor;
  }
}
</style>
