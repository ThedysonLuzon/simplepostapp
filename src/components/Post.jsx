const names = ['Thedyson Luzon', 'Troy Luzon'];

export default function Post() {
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
        <p>{chosenName}</p>
        <p>I am a student</p>

    </div>

  );
}
