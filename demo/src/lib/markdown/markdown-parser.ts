import Heading from '$lib/layout/Heading.svelte';
import {
	Text,
	Em,
	Strong,
	Del,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	List,
	Hr,
	Html,
	Blockquote,
	Code,
	Br,
	Section,
	Link,
	Paragraph,
	ListItem,
	Codespan,
	Image,
	Escape,
} from './renderers';

export const renderers = {
	text: Text,
	em: Em,
	strong: Strong,
	del: Del,
	table: Table,
	tablehead: TableHead,
	tablebody: TableBody,
	tablerow: TableRow,
	tablecell: TableCell,
	list: List,
	hr: Hr,
	html: Html,
	blockquote: Blockquote,
	br: Br,
	image: Image,
	heading: Heading,
	code: Code,
	section: Section,
	link: Link,
	paragraph: Paragraph,
	list_item: ListItem,
	codespan: Codespan,
	escape: Escape,
};

export type Renderers = typeof renderers;
