package org.mql.crowddonating.business;

import org.mql.crowddonating.models.Association;
import org.mql.crowddonating.models.File;

public interface IUserServices {
    File saveFile(File file);
    Association addAssociation(Association association);
}
