export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name ?? 'Default'}</strong>
            <p>{props.repository.descripiton}</p>

            <a href={props.repository.link}>
                Access repository
         </a>
        </li>
    );
}