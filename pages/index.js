import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet
} from "../src/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

function ProfileSidebar(props) {
  return (
    <Box>
      <img
        src={`https://github.com/${props.user}.png`}
        style={{ borderRadius: "8px" }}
      />
      <p>
        <a
          className="boxLink"
          href={`/user/${props.user}`}
          style={{ margin: "10px 0", display: "block" }}
        >
          @{props.user}
        </a>
      </p>
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const githubUser = "caiohaag";
  const amigosDoUser = [
    "juunegreiros",
    "omariosouto",
    "peas",
    "rafaballerini",
    "marcobrunodev",
    "felipefialho",
  ];

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar user={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem-vindo, {githubUser}</h1>
            <OrkutNostalgicIconSet/>
          </Box>
          <Box>Box-2</Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Amigos ({amigosDoUser.length})</h2>
            <ul>
              {amigosDoUser.map((amigo) => {
                return (
                  <li key={amigo}>
                    <a href={`/users/${amigo}`}>
                      <img src={`https://github.com/${amigo}.png`} />
                      <span>{amigo}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
