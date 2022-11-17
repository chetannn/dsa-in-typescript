export function numUniqueEmails(emails: string[]) : number {
        
        const uniqueEmails = new Map()

        for(let i=0; i < emails.length; i++) {

                const localName = emails[i].split('@')[0]
                const domainName = emails[i].split('@')[1]

                let localNameBeforePlus = localName.split('+')[0]
                localNameBeforePlus = localNameBeforePlus.replace(/\./g,'')

                const primaryEmail = localNameBeforePlus + '@' + domainName

                 if(!uniqueEmails.has(primaryEmail)) {
                        uniqueEmails.set(primaryEmail, domainName)
                 }

        }

        return uniqueEmails.size
}
